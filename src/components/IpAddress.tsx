export interface Props { ip : string | boolean}

const Ipaddress = (props : Props) => {
    return (
        <div>
            <p>Ip Address</p>
            <h2>{props.ip}</h2>
        </div>
    )
}

export default Ipaddress