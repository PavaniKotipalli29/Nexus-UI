// @ts-nocheck
import React from "react";
import { Heading, Text, Button } from "./Primitives";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<any, any> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl m-4">
          <Heading level={3} className="text-red-700 dark:text-red-400 mb-4">Something went wrong.</Heading>
          <Text className="text-red-600 dark:text-red-300 mb-4 font-mono text-sm whitespace-pre-wrap">
            {this.state.error?.toString()}
          </Text>
          <div className="bg-white dark:bg-neutral-900 p-4 rounded overflow-auto max-h-64 mb-6 border border-neutral-200 dark:border-neutral-800">
             <code className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                {this.state.errorInfo?.componentStack}
             </code>
          </div>
          <Button 
            variant="danger" 
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
          >
            Try Again
          </Button>
        </div>
      );
    }

    return (this.props as any).children;
  }
}
