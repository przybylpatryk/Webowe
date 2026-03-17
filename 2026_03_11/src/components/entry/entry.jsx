import styles from "./entry.module.scss";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";

export default function Entry() {
    const { id} = useParams();

    const { isPending: postPending, error: postError, data: postData } = useQuery({
        queryKey: ['post'],
        queryFn: () =>
            fetch(`http://localhost:3000/posts/${id}`).then((res) =>
                res.json(),
            ),
    })

    const { isPending: userPending, error: userError, data: userData } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch(`http://localhost:3000/users/${postData.userId}`).then((res) =>
                res.json(),
            ),
    })

    const { isPending: commentsPending, error: commentsError, data: commentsData } = useQuery({
        queryKey: ['comments'],
        queryFn: () =>
            fetch(`http://localhost:3000/posts/${id}/comments`).then((res) =>
                res.json(),
            ),
    })

    if (postPending || userPending || commentsPending) return 'Loading...'

    if (postError) return 'An error has occurred: ' + postError.message
    if (userError) return 'An error has occurred: ' + userError.message
    if (commentsError) return 'An error has occurred: ' + commentsError.message

    async function addComment(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        await fetch(`http://localhost:3000/posts/${id}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.get('komName'),
                email: formData.get('komMail'),
                body: formData.get('komBody')
            })
        })
        window.location.reload();
    }

    return (
        <article className={styles.Entry}>
            <h1>{postData.title}</h1>
            <h2>Autor: {userData.name}</h2>
            <p>{postData.body}</p>
            <br/>
            <h3>Komentarze:</h3>
            {commentsData.map(comment => (
                <div key={comment.id}>
                    <h4>{comment.name}</h4>
                    <h5>{comment.email}</h5>
                    <p>{comment.body}</p>
                </div>
            ))}
            <h3>Dodaj komentarz</h3>
            <form onSubmit={addComment}>
            <input type="text" placeholder="nazwa" name="komName"/>
            <input type="text" placeholder="email" name="komMail"/>
            <textarea placeholder="zawartość" name="komBody"/>
            <input type="submit" value="Dodaj"/>
            </form>
        </article>
    )
}