---
title: 📚 Browse playbooks
---


<details>
<summary>🤔 Wait, WTF are playbooks!?</summary>
<br />

Playbooks are like lessons or tutorials that help you find your way!

MetaGame playbooks are quite special though as some have been written by OGs of the Metaverse! 😱 

</details>


<p></p>


import { PlayBooks } from "../../src/components/playbooks.js";

<!-- add playbooks in this section  -->
export const books = [
  {
    id: 1,
    title: "😎 Make it Without Technical Skills",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookPath: "playbooks/how-to-make-it-without-technical-skills",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
  {
    id: 2,
    title: "🔐 How to not get hacked",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookPath: "playbooks/how-to-not-get-hacked",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
  {
    id: 3,
    title: "🏴󠁣󠁯󠁭󠁥󠁴󠁿 How to Meta",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookPath: "playbooks/how-to-make-it-without-technical-skills",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
  {
    id: 4,
    title: "🌱 How to Plant SEED",
    imgURL: "https://imgur.com/1Kezv9Q.png",
    bookPath: "playbooks/how-to-make-it-without-technical-skills",
    decription:
      "Vestibulum ullamcorper mauris at ligula. Phasellus magna. Aenean ut eros et nisl sagittis vestibulum. Fusce fermentum. Nunc sed turpis.",
  },
];

<PlayBooks books={books} />
