import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const FilterTable = ({albumsId, position = 'end', filterPhoto}) => {
  const stylesPosition = {
    display: 'flex',
    justifyContent: `flex-${position}`,
    marginBottom: '10px'
  };

  const change = (e) => {
    console.log(e);
    filterPhoto(e)
  }

  return (
    <div style={stylesPosition}>
      <Select
        size="large"
        showSearch
        onSelect={(e) => change(e)}
        style={{ width: 400 }}
        placeholder="Search to Select"
        optionFilterProp="children"
      >
        {albumsId.map(({id, title}) => (
          <Option key={id} value={id}>{title}</Option>
        ))}
      </Select>
    </div>
  );
};

export default FilterTable;
