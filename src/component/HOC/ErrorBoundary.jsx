import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    console.log("App Crash Error message", error);
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  handleBack = () => {
    if (
      typeof window !== "undefined" &&
      window.location &&
      window.location.href
    ) {
      window.location.href = "/";
    }
  };
  render() {
    if (this.state.hasError) {
      return (
        <div className={"containerStyle"}>
          <h1 className={"title"}>Oops, there is an error!</h1>
          <button className={"btn"} type="button" onClick={this.handleBack}>
            Try again ?
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
