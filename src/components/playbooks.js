import React from "react";
import styles from "./playbooks.module.scss";

console.log(styles);
export const books = [
  {
    id: 1,
    title: "💫 House of DAOs",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookURL: "",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
  {
    id: 2,
    title: "Playbook 2",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookURL: "",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
  {
    id: 1,
    title: "Playbook 1",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookURL: "",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
  {
    id: 2,
    title: "Playbook 2",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookURL: "",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
];

export function PlayBook({ book }) {
  return (
    <div className={styles.playbook}>
      <a href={book.bookURL}>
        <img src={book.imgURL} />
        <div className={styles.bookInfo}>
          <h4>{book.title}</h4>
          <p>{book.description}</p>
        </div>
      </a>
    </div>
  );
}

export function PlayBooks({ books }) {
  return (
    <ul className={styles.playbooks}>
      {books &&
        books.map((book) => (
          <li>
            <PlayBook book={book} />
          </li>
        ))}
    </ul>
  );
}
