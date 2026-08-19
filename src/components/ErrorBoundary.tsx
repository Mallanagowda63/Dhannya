import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught React ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  private handleGoHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#faf8f4] flex items-center justify-center p-6 text-earth font-sans">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 max-w-lg w-full shadow-xl text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-inner">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold font-serif text-earth">Something went wrong</h2>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                An unexpected display error occurred while processing your click or request. Don't worry, your cart and data are safe!
              </p>
            </div>

            {this.state.error && (
              <div className="bg-stone-100 p-3 rounded-xl border border-stone-200 text-left overflow-x-auto max-h-32 text-[11px] font-mono text-rose-700">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto bg-olive hover:bg-[#4a4a34] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition active:scale-95 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              <button
                onClick={this.handleGoHome}
                className="w-full sm:w-auto bg-cream hover:bg-stone-200 border border-stone-200 text-earth font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
              >
                <Home className="w-4 h-4 text-olive" />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
