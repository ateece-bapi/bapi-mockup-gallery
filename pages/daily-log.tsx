import { GetStaticProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { useState, useMemo } from 'react';

interface Props {
  content: string;
  lastUpdated: string;
}

export default function DailyLog({ content, lastUpdated }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecent, setShowRecent] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const handleExportPDF = () => {
    // Expand all sections for PDF
    expandAll();
    
    // Small delay to ensure sections are rendered
    setTimeout(() => {
      window.print();
    }, 100);
  };

  // Extract sections (h2 headings) for TOC and collapsible UI
  const sections = useMemo(() => {
    const lines = content.split('\n');
    const result: Array<{ title: string; id: string; content: string; date?: Date }> = [];
    let currentSection: { title: string; id: string; content: string; date?: Date } | null = null;

    lines.forEach((line) => {
      const h2Match = line.match(/^## (.+)$/);
      if (h2Match) {
        if (currentSection) result.push(currentSection);
        const title = h2Match[1];
        const id = title.toLowerCase().replace(/[^\w]+/g, '-');
        
        // Try to parse date from title
        const dateMatch = title.match(/^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})/);
        const date = dateMatch ? new Date(`${dateMatch[1]} ${dateMatch[2]}, ${dateMatch[3]}`) : undefined;
        
        currentSection = { title, id, content: `## ${title}\n`, date };
      } else if (currentSection) {
        currentSection.content += line + '\n';
      }
    });
    if (currentSection) result.push(currentSection);
    
    return result;
  }, [content]);

  // Filter sections based on search and date filter
  const filteredSections = useMemo(() => {
    let filtered = sections;

    // Recent filter (last 90 days)
    if (showRecent) {
      const ninetyDaysAgo = new Date();
      ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
      filtered = filtered.filter(s => s.date && s.date >= ninetyDaysAgo);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(s => 
        s.title.toLowerCase().includes(query) || 
        s.content.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [sections, searchQuery, showRecent]);

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => setExpandedSections(new Set(filteredSections.map(s => s.id)));
  const collapseAll = () => setExpandedSections(new Set());

  return (
    <div className='mockupHub'>
      <Head>
        <title>Daily Log - BAPI Headless Project</title>
        <style>{`
          @media print {
            .backButton,
            .controls-toolbar,
            header,
            nav {
              display: none !important;
            }
            
            .section-wrapper {
              border: none !important;
              page-break-inside: avoid;
              margin-bottom: 2rem !important;
            }
            
            .section-header {
              background: white !important;
              border-bottom: 2px solid #333 !important;
              cursor: default !important;
              padding: 0.5rem 0 !important;
            }
            
            .section-toggle {
              display: none !important;
            }
            
            .section-content {
              display: block !important;
              padding: 0 !important;
            }
            
            .markdownContainer {
              max-width: 100% !important;
            }
            
            h1, h2, h3 {
              page-break-after: avoid;
            }
            
            pre, blockquote {
              page-break-inside: avoid;
            }
          }
        `}</style>
      </Head>

      <main className='hubMain'>
        <Link href='/' className='backButton'>
          ← Back to Gallery
        </Link>
        
        <div className='markdownContainer'>
          <div className='controls-toolbar' style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div className='updateBadge'>Last updated: {lastUpdated}</div>
              
              {/* PDF Export */}
              <button 
                onClick={handleExportPDF}
                style={{ 
                  padding: '0.5rem 1rem', 
                  fontSize: '14px',
                  background: '#1479BC',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                📄 Download as PDF
              </button>
              
              {/* Search */}
              <input
                type='text'
                placeholder='Search log entries...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: '1',
                  minWidth: '200px',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />

              {/* Recent toggle */}
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type='checkbox'
                  checked={showRecent}
                  onChange={(e) => setShowRecent(e.target.checked)}
                />
                <span style={{ fontSize: '14px' }}>Recent only (90 days)</span>
              </label>

              {/* Expand/Collapse */}
              <button onClick={expandAll} style={{ padding: '0.5rem 1rem', fontSize: '14px' }}>
                Expand All
              </button>
              <button onClick={collapseAll} style={{ padding: '0.5rem 1rem', fontSize: '14px' }}>
                Collapse All
              </button>
            </div>

            {/* Results count */}
            <div style={{ marginTop: '1rem', fontSize: '14px', color: '#666' }}>
              Showing {filteredSections.length} of {sections.length} entries
            </div>
          </div>

          {/* Collapsible sections */}
          {filteredSections.map((section) => {
            const isExpanded = expandedSections.has(section.id);
            return (
              <div key={section.id} className='section-wrapper' style={{ marginBottom: '1rem', border: '1px solid #eee', borderRadius: '4px' }}>
                <div
                  className='section-header'
                  onClick={() => toggleSection(section.id)}
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    background: '#f9f9f9',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '4px'
                  }}
                >
                  <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{section.title}</h2>
                  <span className='section-toggle' style={{ fontSize: '1.5rem' }}>{isExpanded ? '−' : '+'}</span>
                </div>
                
                {isExpanded && (
                  <div className='section-content' style={{ padding: '1rem' }}>
                    <ReactMarkdown
                      components={{
                        h2: ({node, children, ...props}) => {
                          // Don't render h2 again since it's in the header
                          return null;
                        },
                      }}
                    >
                      {section.content}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            );
          })}

          {filteredSections.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
              No entries found. Try adjusting your search or filters.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/ateece-bapi/bapi-headless/main/docs/DAILY-LOG.md'
  );
  const content = await res.text();
  
  return {
    props: {
      content,
      lastUpdated: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    },
    revalidate: 3600, // Revalidate every hour to fetch updates
  };
};