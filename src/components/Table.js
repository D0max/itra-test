import React from 'react';
import {Table as TableComponent} from 'antd';
import {DeleteOutlined} from '@ant-design/icons'
import { Popconfirm, message } from 'antd';

const Table = ({data, deletePhoto, setSelectedPhoto}) => {

  const columns = [
    {
      title: 'Image',
      dataIndex: 'thumbnailUrl',
      key: 'thumbnailUrl',
      render: (image) => (
        <img className="image-table" src={image} alt={image}/>
      ),
      width: 100
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: "Delete",
      dataIndex: 'id',
      key: 'id',
      fixed: 'right',
      width: 100,
      render: (id) => {
        return (
          <div className="button-delete" onClick={(e) => deletePhoto(e, id)}>
            <DeleteOutlined />
          </div>
        )
      }
    }
  ];

  return (
    <>
      <TableComponent
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: '5' }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              setSelectedPhoto(record);
            },
          }
        }}
      />
    </>
  );
};

export default Table;
