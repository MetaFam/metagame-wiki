import React from "react";
import styles from "./playbooks.module.scss";
import { someSidebar } from "../../sidebars";
// console.log(someSidebar);

export const books = [
  {
    id: 1,
    title: "📚 Make it Without Technical Skills",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookPath: "playbooks/how-to-make-it-without-technical-skills",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
  {
    id: 2,
    title: "📚 How not to get hacked",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookPath: "playbooks/how-not-to-get-hacked",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
  {
    id: 1,
    title: "Playbook 1",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookPath: "",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
  {
    id: 2,
    title: "Playbook 2",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookPath: "",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
];

export function bookList() {
  const pages = Object.entries(someSidebar);

  let playbooks = pages.filter((page) => {
    return page[0].includes("📚 Playbooks") && page;
  });

  return playbooks[0];
}

export function PlayBook({ book }) {
  return (
    <div className={styles.playbook}>
      <a href={`/docs/${book.bookPath}`}>
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
  // const booksToShow = books[1].filter((book) => {
  //   return !book.includes("index") && book;
  // });

  return (
    <ul className={styles.playbooks}>
      {books &&
        books.map((book, i) => (
          <li key={`pb-${i}`}>
            <PlayBook key={`pb-${i}`} book={book} />
          </li>
        ))}
    </ul>
  );
}
