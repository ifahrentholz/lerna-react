import * as React from "react";

export class Paragraph extends React.Component {
  render() {
    return (
      <>
        <p className="ingobingo">{this.props.children}</p>
      </>
    );
  }
}
