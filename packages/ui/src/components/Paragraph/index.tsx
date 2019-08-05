import * as React from "react";

export class Paragraph extends React.Component {
  render() {
    return (
      <>
        <p className="schlingel">{this.props.children}</p>
      </>
    );
  }
}
