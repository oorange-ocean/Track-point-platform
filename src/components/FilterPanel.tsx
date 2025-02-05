import React from "react";
import { DatePicker, Select, Button } from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

const FilterPanel: React.FC<{ onFilter: (filters: any) => void }> = ({ onFilter }) => {
  const handleSearch = () => {
    onFilter({ dateRange: ["2024-01-01", "2024-02-01"], eventKey: "click" });
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <RangePicker />
      <Select defaultValue="click" style={{ width: 120, marginLeft: 8 }}>
        <Option value="click">点击事件</Option>
        <Option value="view">页面访问</Option>
      </Select>
      <Button type="primary" onClick={handleSearch} style={{ marginLeft: 8 }}>
        查询
      </Button>
    </div>
  );
};

export default FilterPanel;
