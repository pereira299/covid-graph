import React from "react";

type GraphSectionProps = {
    children?: React.ReactNode;
    title: string;
}

const GraphSection: React.FC<GraphSectionProps> = (props: GraphSectionProps) => {

    return (
        <article className="p-10 min-h-screen">
            <h4 className="text-5xl font-bold font-lato">{props.title}</h4>
            {props.children}
        </article>
    )
}


export default GraphSection;