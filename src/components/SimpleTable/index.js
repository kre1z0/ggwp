import React from "react";

import { Tags } from "../../components/Tags";
import { Table, Th, Td, Link } from "./styled";

const getComponent = (item, key) => {
  const value = item[key];

  if (typeof value === "string" || value instanceof String) {
    const trimedUrl = item[key].trim();
    const isHttp = trimedUrl.startsWith("http");
    if (isHttp) {
      return <Link href={trimedUrl}>{key}</Link>;
    } else {
      return value;
    }
  } else if (Array.isArray(value)) {
    return <Tags tags={value} />;
  }
};

export const SimpleTable = ({ headers, data, cellWidth = [], className }) => {
  return (
    <Table className={className}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <Th cellWidth={cellWidth[index]} key={`${header}-${index + 1}`} as="th">
              {header}
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={`project-table-row-${index + 1}`}>
            {Object.keys(item).map((key, i) => (
              <Td key={`${key} tr-${index + 1} td-${i + 1}`} cellWidth={cellWidth[i]}>
                {key === "description" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item[key],
                    }}
                  />
                ) : (
                  getComponent(item, key)
                )}
              </Td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
