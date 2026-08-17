type Row = Record<string, string | number>;

export function SpecTable({
  caption,
  columns,
  rows,
}: {
  caption?: string;
  columns: { key: string; label: string; numeric?: boolean }[];
  rows: Row[];
}) {
  return (
    <div className="table-wrap" tabIndex={0}>
      <table className="spec">
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} scope="col">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td key={c.key} className={c.numeric ? "num" : undefined}>
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
