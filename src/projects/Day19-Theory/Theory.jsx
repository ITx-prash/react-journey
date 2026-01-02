import { useRef } from "react";

const Theory = () => {
  const contactSection = useRef(null);
  const topSection = useRef(null);
  const bottomSection = useRef(null);
  const inputEl = useRef(null);

  const handleButtonClick = () => {
    inputEl.current.focus();
  };

  const handleMiddleScroll = () => {
    contactSection.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const gotoTop = () => {
    topSection.current.scrollIntoView({ behavior: "smooth" });
  };

  const gotoBottom = () => {
    bottomSection.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-5 right-5 z-50 flex gap-4">
        <button
          onClick={gotoBottom}
          className="rounded bg-blue-500 px-4 py-2 text-white shadow-lg transition hover:bg-blue-600"
        >
          Go to Bottom ↓
        </button>
      </div>

      <div
        ref={topSection}
        className="flex min-h-screen flex-col items-center justify-center p-6"
      >
        <h1 className="mb-10 text-3xl font-bold">Top of Page</h1>

        <input
          ref={inputEl}
          type="text"
          placeholder="I will receive focus..."
          className="rounded-lg border-2 border-gray-500 px-3 py-1 text-gray-700 focus:border-gray-800 focus:outline-none"
        />

        <button
          onClick={handleButtonClick}
          className="mt-4 cursor-pointer rounded-lg bg-purple-600 px-4 py-1 text-xl font-medium text-white"
        >
          Focus the input
        </button>

        <button
          onClick={handleMiddleScroll}
          className="mt-4 cursor-pointer rounded-lg bg-green-600 px-4 py-1 text-xl font-medium text-white"
        >
          Go to Contact (Middle)
        </button>

        <p className="mt-10 max-w-2xl text-justify text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          tempora quaerat, ex ipsum autem repellendus? Assumenda, id. Mollitia
          nobis illum officia! Minus praesentium numquam reiciendis quisquam
          atque dolore magnam aliquam tempore nesciunt similique, placeat quis
          beatae voluptates repudiandae illum, excepturi, repellat accusantium
          quidem quia! Dolor autem laborum fugit a est eligendi consectetur.
          Quisquam quae reprehenderit minus qui libero, saepe rem, beatae
          laborum facere voluptatem aspernatur. Optio quo non impedit vel eos,
          aliquid distinctio delectus nesciunt odit harum fuga incidunt enim
          quis, repellendus natus perspiciatis obcaecati nisi rerum. Sit earum,
          ut modi ratione rerum natus quam quisquam repudiandae, debitis et aut
          dolorum velit dicta iste similique exercitationem quibusdam quaerat
          quasi numquam qui dolorem in accusantium? Nobis recusandae ducimus
          reiciendis! Magni quos incidunt fuga error, doloribus architecto.
          Provident ex odit expedita quisquam error sapiente, nihil sit illo
          doloribus aut similique et cumque repudiandae. Quis alias quos dolores
          inventore nihil laboriosam saepe, reiciendis nobis maiores deleniti
          assumenda laborum? Quam quasi fuga facere laboriosam nostrum harum, ab
          error, corporis neque saepe possimus voluptatibus rem beatae, repellat
          necessitatibus expedita eveniet velit quae quod culpa nisi minima qui
          omnis! Adipisci, eos? Saepe illum minima enim ex veritatis aliquam
          sed. Consequuntur modi aperiam atque laborum recusandae cum id, unde
          aliquam animi, quia voluptate cumque. Iure cumque praesentium libero!
          Voluptates dolorem maiores culpa odio praesentium quos, reiciendis aut
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, quia.
          Natus assumenda magni dignissimos delectus odio libero soluta eos rem
          dolorum ullam molestiae a enim, obcaecati labore, repellendus
          similique fuga? Possimus, molestiae.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor
          facilis cupiditate minus labore praesentium eligendi consectetur eos.
          Quibusdam iste reprehenderit blanditiis porro expedita sapiente
          tempore aspernatur voluptatem quae sit earum, excepturi dolore facere
          numquam reiciendis unde adipisci animi dolorum quia officia. Dolore
          porro nostrum temporibus, quasi in, incidunt perspiciatis magni,
          sapiente qui ea fugiat molestiae! A quos modi temporibus fuga
          molestiae. Impedit asperiores consequuntur mollitia nulla in ex quae,
          nesciunt neque expedita maiores provident, dolor modi beatae quas eum
          numquam accusamus placeat cum explicabo laudantium! Ad dolores
          voluptatum veniam inventore deserunt accusamus, vitae ex magni, modi
          unde et quis nesciunt culpa deleniti sapiente quaerat quas, voluptas
          tenetur porro temporibus repudiandae dolorum aliquam ut? Aperiam
          perspiciatis nam, aut beatae eveniet ullam quae minus ex modi cum qui,
          dolorem odit, amet hic. Expedita dolores repellendus nulla impedit,
          incidunt dolorum eligendi ad? Aut modi culpa nisi aliquid perspiciatis
          inventore tenetur aliquam? Architecto dolorum veniam a minima neque
          eaque pariatur velit nesciunt mollitia repellat facere sunt vitae
          laborum fugit quos voluptatem perspiciatis deleniti quibusdam quis
          vero, ut ratione quaerat officia? Atque sequi inventore repudiandae
          quo id. Esse minus totam porro quasi, adipisci reiciendis a quod. Sed
          explicabo maiores est optio tempora illo mollitia quia consequuntur.
          Eum nisi dignissimos molestias et nam hic, enim voluptatum a delectus
          quae eos ea architecto repellat quas corporis. Eaque exercitationem
          voluptatibus commodi officiis corrupti quidem quaerat quod aliquid,
          earum, similique saepe rem iste accusantium vitae ut nisi sint rerum
          cum, officia in architecto repudiandae? Quia nihil unde ea vitae
          quisquam. Incidunt voluptatem qui quibusdam aliquid animi neque
          temporibus odit maxime voluptas culpa nobis aut molestiae veritatis
          non, harum iste saepe ullam similique quidem et reiciendis fugit sunt!
          Fugit animi autem tenetur ut unde porro maiores nihil tempora alias,
          earum ipsa accusamus iure dolor iste expedita soluta quibusdam
          eligendi illo debitis cupiditate praesentium pariatur odio
          consequuntur perspiciatis.
          <br />
          <br />
          <span
            className="block scroll-mt-[2vh] bg-red-500 px-5 text-xl"
            ref={contactSection}
          >
            📍 CONTACT SECTION (You arrived!)
          </span>
          <br />
          Rem ad iure, animi dicta mollitia incidunt tempore autem repellat
          ipsum odit. Excepturi error consequuntur laborum ad, necessitatibus
          suscipit saepe tempora ullam modi ducimus pariatur aut enim officiis
          voluptatibus, sequi nesciunt dolorem et exercitationem, vero iste?
          Inventore voluptatem dolorem vel sit maxime doloremque obcaecati
          explicabo accusantium, voluptate eius est quis repellendus architecto
          veritatis earum dolorum velit eaque optio deleniti autem quisquam id
          harum aliquam! Ipsum quo vero, repellendus fugit iusto dolorum
          sapiente voluptate recusandae sequi magnam rerum, iure, non obcaecati
          optio sunt officiis velit? Odit nisi eius porro? Aperiam deserunt aut
          aliquam. Sit, cupiditate iure officiis consectetur exercitationem
          asperiores, expedita ea in doloremque labore minima optio ipsum
          recusandae delectus odit adipisci ducimus iste. Fugit perferendis
          blanditiis odio quasi quae error nobis, voluptatem facere, veritatis
          officiis ab doloribus! Ad non hic aut iure fuga laudantium illum
          dolores aperiam temporibus id accusamus cupiditate vitae beatae, sed
          odit architecto? Aliquam saepe voluptas optio iusto adipisci maxime
          sunt deserunt beatae cum sapiente soluta dolorem distinctio, fuga
          officia assumenda eligendi tenetur vel dicta! Placeat voluptatem in
          nisi accusantium ipsam iusto ex ratione! Voluptatem praesentium fuga,
          quas minus hic sequi adipisci sed odit iste repellat nihil sit
          voluptatum voluptate officia natus repudiandae similique aperiam dolor
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid
          sapiente nihil eligendi ab fugiat, reprehenderit quasi rem consectetur
          debitis neque voluptates earum ducimus voluptatibus soluta. Aliquam
          iure nostrum molestias odio officiis facilis eius officia laborum,
          iste quam dicta hic repudiandae reiciendis illo minima id inventore
          aspernatur vitae qui molestiae ratione distinctio asperiores saepe!
          Sequi doloremque magni nesciunt enim dolorum esse corporis voluptate
          quia vero asperiores, illum tempora perferendis hic optio amet? Aut
          corrupti aliquid nemo velit dolorem exercitationem modi, ipsam
          obcaecati accusantium aperiam voluptatem, quisquam reiciendis atque
          voluptatibus culpa eligendi rerum, at laboriosam repellendus
          necessitatibus sed veritatis molestiae architecto. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ipsum, quo autem? Numquam animi
          omnis porro laborum voluptates, voluptas itaque mollitia aliquid
          nesciunt? Corrupti quod nihil nesciunt reprehenderit iusto
          consequatur, in quae sit aperiam mollitia cumque, exercitationem
          laboriosam odit aliquid id fugiat voluptatibus, incidunt illum rerum.
          Voluptatibus necessitatibus blanditiis alias aliquid cupiditate
          expedita, magnam molestiae nostrum sunt nemo quibusdam?
          Exercitationem, vero ducimus? Harum autem, ab cumque, fugit quae
          consequatur labore culpa nesciunt, reiciendis suscipit ad? Laboriosam
          facilis dolorum rerum mollitia animi, dolor similique aperiam ea velit
          dignissimos? Sapiente molestiae provident maiores reiciendis aperiam
          saepe, excepturi corporis aspernatur rem, aliquam doloremque
          praesentium? laboriosam voluptates ad, soluta nesciunt cupiditate at?
          Odit accusamus inventore, voluptas fuga tempora asperiores! Unde sunt
          deserunt dignissimos delectus ratione voluptatem assumenda obcaecati.
          Voluptatum reiciendis beatae aut incidunt nam voluptatibus esse sunt
          quam nobis sequi, sint nemo, a deserunt optio perspiciatis eveniet
          voluptates, perferendis maxime. Esse nulla saepe praesentium, ex id
          obcaecati, voluptas ea, maiores sint earum maxime fugiat et assumenda
          aspernatur voluptatum quas minima asperiores expedita amet ab
          exercitationem. Deserunt maiores a reiciendis aut vero ipsa quasi
          aliquam tenetur eius.
        </p>

        <div
          ref={bottomSection}
          className="mt-10 w-full rounded bg-gray-200 p-10 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold">You hit the bottom</h2>
          <button
            className="rounded bg-red-500 px-6 py-2 text-lg text-white transition hover:bg-red-600"
            onClick={gotoTop}
          >
            Go Back to Top ↑
          </button>
        </div>
      </div>
    </>
  );
};
export default Theory;
