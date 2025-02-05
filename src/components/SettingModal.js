import React from "react";
import { Modal, Button } from "antd";

const SettingModal = (props) => {
  const {
    currentIndex,
    setCurrentIndex,
    customData,
    setCustomData,
    isModalVisible,
    handleOk,
    handleCancel,
    initData,
    limit,
    setLimit,
  } = props;

  const arrayIndex = Array.from({ length: 10 }, (_, index) => index);

  return (
    <Modal
      title="Customizar ordem"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width="100%"
      footer={<></>}
    >
      <div className="w-full flex justify-center flex-wrap mb-8">
        Ordem
        {arrayIndex.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 text-center ${
              item == currentIndex ? "bg-slate-500" : "bg-slate-300"
            }`}
            onClick={() => setCurrentIndex(item)}
          >
            {item + 1}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-col">
        {initData.map((i, index) => (
          <div
            className="w-full flex justify-center flex-wrap items-center my-2"
            key={index}
          >
            Globo {index + 1}
            {i.map((j) => (
              <button
                key={index * 10 + j}
                className={`px-4 py-2 mx-1 text-center ${
                  customData[index][currentIndex] == j
                    ? "bg-slate-500"
                    : customData[index].includes(j)
                    ? "bg-slate-100"
                    : "bg-slate-300"
                }`}
                disabled={customData[index].includes(j)}
                onClick={() => {
                  let bufData = JSON.parse(JSON.stringify(customData));
                  bufData[index][currentIndex] = j;
                  setCustomData(bufData);
                }}
              >
                {j}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        Limit Number:
        <input
          className="p-2 mx-4 bg-gray-200"
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          min={1}
          max={10}
        />
      </div>
    </Modal>
  );
};

export default SettingModal;
