import axios from "axios"
type covid = {
    cases: number,
    datetime: Date,
    deaths: number,
    refuses: number,
    state: string
    suspects: number
    uf: string
    uid: number
}
export default function deadService() {
    const data:any = axios.get("https://covid19-brazil-api.now.sh/api/report/v1")
    return {
        casesByState: data.data.map((item:covid) => {
            return {
                state: item.state,
                count: item.cases
            }
        }),
        deathsByState: data.data.map((item:covid) => {
            return {
                state: item.state,
                count: item.deaths
            }
        }
        )
    }
}