import { useLoaderData } from "remix";
import { Form } from "remix";


export let loader = function () {
    // DB Data load here
    console.log("aaaa");
    return [{ "name": "leesgun" }, { "name": "Remix" }];
};

export async function action({ request }) {
    // NOT WORK
    let prameters = await request.formData();
    console.log(prameters);
    return null;
}
// setInterval(() => {
//     console.log(Date.now());
//   }, 10000);

export default function Index() {
    let data = useLoaderData();
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            <div>
                <h1>Welcome to Remix</h1>
                <ul>
                    { data.map((user, index) => (<li key={index}>{user.name}</li>)) }
                    { data.map(user => (<li key={user.name}>{user.name}</li>)) }
                </ul>
            </div>

            <div>
                <Form method="post">
                    <input type="text" name="name" />
                    <input type="text" name="nick" />
                    <button type="submit">Send</button>
                </Form>
            </div>

        </div>
    );
}
