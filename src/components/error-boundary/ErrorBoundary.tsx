import React, { Component, ErrorInfo, ReactNode } from "react";
import './ErrorBoundary.scss'

interface ErrorBoundaryProps {
  children: ReactNode;
}


interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error", error, errorInfo);
  }

  public render(): JSX.Element | ReactNode {
    if (this.state.hasError) {
      return <h1 className="error">Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;