interface GreetingProps {
    message?: string;
}

export default function Greeting({ message = 'World' }: GreetingProps) {
    return (
        <div>Hello, {message}!</div>
    );
}