import React, {Component} from 'react';
import Table from "../../components/Table";
import FilterTable from "../../components/FilterTable";
import {Modal} from "antd";

class Pictures extends Component {
  state = {
    photos: [],
    selectedPhoto: undefined,
    albumsId: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos/')
      .then(response => response.json())
      .then(json => this.setState(prev => ({...prev, photos: json})))

    fetch('https://jsonplaceholder.typicode.com/albums/')
      .then(response => response.json())
      .then(json => this.setState(prev => ({...prev, albumsId: json})))
  };

  deletePhoto(id) {
    const {photos} = this.state
    const newPhotosArr = photos.filter((item) => item.id !== id)
    this.setState(prev => ({...prev, photos: newPhotosArr}));
  }

  filterPhoto(albumID) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`)
      .then(response => response.json())
      .then(json => this.setState(prev => ({...prev, photos: json})))
  }

  cancelModal() {
    this.setState(prev => ({...prev, selectedPhoto: undefined}))
  }

  setSelectedPhoto(e) {
    this.setState(prev => ({...prev, selectedPhoto: e}))
  }

  render() {
    const { photos, selectedPhoto, albumsId } = this.state;

    console.log(selectedPhoto);
    return (
      <div>
        <FilterTable filterPhoto={(e) => this.filterPhoto(e)} albumsId={albumsId}/>
        <Table
          deletePhoto={(id) => this.deletePhoto(id)}
          data={photos}
          setSelectedPhoto={(e) => this.setSelectedPhoto(e)}
        />
          <Modal
            footer={null}
            onCancel={() => this.cancelModal()}
            visible={Boolean(selectedPhoto)}
          >
            {selectedPhoto && (
              <div>
                <img width={200} src={selectedPhoto.url} alt={selectedPhoto.url}/>
                <p>{selectedPhoto.title}</p>
              </div>
            )}
          </Modal>
      </div>
    );
  }
}

export default Pictures;
