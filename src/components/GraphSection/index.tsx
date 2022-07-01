import React from "react";
import { Bar, Line } from "react-chartjs-2";

type GraphSectionProps = {
    children?: React.ReactNode;
    title: string;
    data: any;
    chartType: string;
    color?: string;
}



const GraphSection: React.FC<GraphSectionProps> = (props: GraphSectionProps) => {
    const labels = props.data.map((item:any) => item.label);
    const data = {
        labels,
        datasets: [
            {
                data: props.data.map((item:any) => item.count),
                backgroundColor: props.color || 'rgba(245, 158, 11, 0.5)',
                borderColor: props.color || 'rgba(245, 158, 11, 1)',
            }
        ]
    };
    
    return (
        <article className="p-10 min-h-screen">
            <h4 className="text-5xl font-bold font-lato">{props.title}</h4>
            {props.chartType === "line" && <Line data={data} />}
            {props.chartType === "bar" && <Bar data={data} />}
        </article>
    )
}


export default GraphSection;