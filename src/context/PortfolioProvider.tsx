import { createContext } from "react";
import { usePortfolio } from "../hooks/usePortfolio";

export const PortfolioContext = createContext(
    {} as ReturnType<typeof usePortfolio>
);

interface IProps {
    children: JSX.Element;
}

export const PortfolioProvider = ({ children }: IProps) => {
    const value = usePortfolio();

    return (
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    );
};
