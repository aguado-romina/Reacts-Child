import React from "react";

class Allcompailed extends React.Component {
  state = {
    imageUrl: undefined,
    imageAlt: undefined,
  };

  handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');

    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "ybbx9cx4");

    const options = {
      method: "POST",
      body: formData,
    };

    return fetch(
      "https://api.cloudinary.com/v1_1/reactschild/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          imageUrl: res.secure_url,
          imageAlt: `An image of ${res.original_filename}`,
        });
      })
      .catch((err) => console.log(err));
  };

  openWidget = () => {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "reactschild",
          uploadPreset: "ybbx9cx4",
        },
        (error, { event, info }) => {
          if (event === "success") {
            this.setState({
              imageUrl: info.secure_url,
              imageAlt: `An image of ${info.original_filename}`,
            });
          }
        }
      )
      .open();
  };

  render() {
    const { imageUrl, imageAlt } = this.state;

    return (
      <main className="Allcompailed">
        <section className="left-side">
          <form>
            <div className="form-group">
              <input type="file" />
            </div>

            <button
              type="button"
              className="btn"
              onClick={this.handleImageUpload}
            >
              Submit
            </button>
            {/* <button
              type="button"
              className="btn widget-btn"
              onClick={this.openWidget}
            >
              Upload Via Widget
            </button> */}
          </form>
        </section>
        <section className="right-side">
          <p>The resulting image will be displayed here</p>
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image" />
          )}
        </section>
      </main>
    );
  }
}

export default Allcompailed;
