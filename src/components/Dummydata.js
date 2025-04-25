// mockIrrigationData.js
const irrigationData = [
  {
    index: 0,
    plot: "D1",
    startTime: "070000",
    endTime: "070459",
    RunBy: "M1",
    status: "Done",
  },
  {
    index: 1,
    plot: "D2",
    startTime: "070000",
    endTime: "070459",
    RunBy: "M2",
    status: "Pending",
  },
  {
    index: 2,
    plot: "D3",
    startTime: "070500",
    endTime: "070959",
    RunBy: "M1",
    status: "Pending",
  },
  {
    index: 3,
    plot: "D4",
    startTime: "070500",
    endTime: "070959",
    RunBy: "M2",
    status: "In Progress",
  },
  {
    index: 4,
    plot: "D1",
    startTime: "073000",
    endTime: "073459",
    RunBy: "M1",
    status: "Done",
  },
  {
    index: 5,
    plot: "D2",
    startTime: "073000",
    endTime: "073459",
    RunBy: "M2",
    status: "Done",
  },
  {
    index: 6,
    plot: "D3",
    startTime: "073500",
    endTime: "073959",
    RunBy: "M1",
    status: "Pending",
  },
  {
    index: 7,
    plot: "D4",
    startTime: "073500",
    endTime: "073959",
    RunBy: "M2",
    status: "Done",
  },
  {
    index: 8,
    plot: "D4",
    startTime: "185500",
    endTime: "185959",
    RunBy: "M2",
    status: "In Progress",
  },
];

function generateIrrigationData(times) {
  const result = [];
  for (let i = 0; i < times; i++) {
    irrigationData.forEach((item, index) => {
      result.push({ ...item, index: result.length });
    });
  }
  return result;
}

export default generateIrrigationData;
