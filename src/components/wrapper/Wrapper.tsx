import React from "react";

type Props = { className?: string; children: React.ReactElement };

const Wrapper = ({ className, children }: Props) => {
	return <div className={`max-w-7xl ${className}`}>{children}</div>;
};

export default Wrapper;
