import { SourceDistribution } from '../../types';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface SourceBreakdownProps {
  distribution: SourceDistribution[];
  totalCount: number;
}

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#6b7280', '#ec4899'];

export function SourceBreakdown({ distribution, totalCount }: SourceBreakdownProps) {
  const chartData = distribution.map((item, index) => ({
    name: item.tierName,
    value: item.count,
    weight: item.weightContribution,
    color: COLORS[index % COLORS.length],
  }));

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <h3 className="mb-4">Source Distribution ({totalCount} total)</h3>
      <p className="text-xs text-muted-foreground mb-4">
        <strong className="text-foreground">Transparency Note:</strong> Tier 2 "Fact-Check Orgs" are human-curated professional fact-checking organizations (e.g., IFCN-certified fact-checkers).
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                        <p className="font-medium">{payload[0].name}</p>
                        <p className="text-sm text-muted-foreground">
                          {payload[0].value} sources ({payload[0].payload.weight}% weight)
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {distribution.map((item, index) => (
            <div key={item.tier} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span>{item.icon} {item.tierName} ({item.count})</span>
              </div>
              <span className="text-muted-foreground">{item.weightContribution}% weight</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}