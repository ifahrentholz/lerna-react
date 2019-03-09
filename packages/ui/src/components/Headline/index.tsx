import * as React from "react";

export interface HeadlineProps {
  compiler: string;
  framework: string;
  name: string;
}

export class Headline extends React.Component<HeadlineProps> {
  render() {
    return (
      <h1>
        Hello {this.props.name} from {this.props.compiler} and{" "}
        {this.props.framework}
      </h1>
    );
  }
}
