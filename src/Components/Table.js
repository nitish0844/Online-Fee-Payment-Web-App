import React, { useState } from "react";
import Payment from "./Payment";

const DataTable = ({ feesDetails }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsId, setSelectedItemsId] = useState([]);
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginLeft: "100px",
      }}
    >
      <div style={{ border: "2px solid black" }}>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div style={{ width: 100, margin: 10 }}>checkbox</div>
          <div style={{ width: 100, margin: 10 }}>ID</div>
          <div style={{ width: 100, margin: 10 }}>Fees Type</div>
          <div style={{ width: 100, margin: 10 }}>Fees Amount</div>
          <div style={{ width: 100, margin: 10 }}>Last Amount</div>
        </div>
        <div>
          {feesDetails?.map((item, index) => {
            return (
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div style={{ width: 100, margin: 10 }}>
                  <input
                    type="checkbox"
                    onChange={() => {
                      if (selectedItemsId.includes(item.id)) {
                        setSelectedItems(
                          selectedItems.filter((el) => el.id !== item.id)
                        );
                        setSelectedItemsId(
                          selectedItemsId.filter((el) => el !== item.id)
                        );
                      } else {
                        setSelectedItems([...selectedItems, item]);
                        setSelectedItemsId([...selectedItemsId, item.id]);
                      }
                    }}
                    checked={selectedItemsId.includes(item.id)}
                  />
                </div>
                <div style={{ width: 100, margin: 10 }}>{index + 1}</div>
                <div style={{ width: 100, margin: 10 }}>{item?.type}</div>
                <div style={{ width: 100, margin: 10 }}>{item?.amount}</div>
                <div style={{ width: 100, margin: 10 }}>{item?.date}</div>
              </div>
            );
          })}
          <div style={{ marginTop: 150 }}>
            <div>
              Total :{" "}
              {selectedItems.length >= 1
                ? selectedItems?.reduce((a, b) => a + Number(b.amount), 0)
                : 0}
            </div>
            <div style={{ marginTop: 50, marginLeft: 220 }}>
              {selectedItems.length >= 1 && (
                <Payment
                  amount={selectedItems?.reduce(
                    (a, b) => a + Number(b.amount),
                    0
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
