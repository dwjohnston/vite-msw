import { useEffect, useState } from "react";

export type ComponentProps = {




}

export function Component(props: ComponentProps) {


    const [value, setValue] = useState(null);

    useEffect(() => {
        fetch("/hello").then((v) => {
            return v.json()
        }).then(v => {
            console.log(v);
            setValue(v.greeting);
        });
    }, [])


    console.log(value);
    return <div>
        hello world!

        <p>{value ? value : "foo"}</p>
    </div>


} 