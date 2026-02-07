import Background from './components/Background.jsx';
import Tooltip from './components/Tooltip.jsx';
import Question from './components/Question.jsx';
import { useState } from 'react';
import Gif from './components/Gif.jsx';
import RunawayNoButton from './components/RunawayNoButton.jsx';
import './daisy.css';

export default function App({ onYesClickHandler }) {
  const [questionFinish, setQuestionFinish] = useState(false);
  const [noQuoteIndex, setNoQuoteIndex] = useState(0);

  const noMessages = [
    '😳 Oh… tu es sûre ?',
    'Hmm… réfléchis encore un peu 💭',
    'Attends… vraiment ?',
    'Mon cœur vient de rater un battement 💔',
    'J’avais pourtant préparé quelque chose de spécial…',
    'Ça me rend un peu triste tu sais… 🥺',
    'Même la lune est déçue 🌙',
    'Le bouton “Oui” est juste à côté hein..',
    'C’est ton dernier mot ? 👀',
    'Bon… et si je te faisais un câlin ? 🤍',
    /*"Il te faut plus qu'un calin ??, madame est demandante dis donc 😏"*/
  ];

  const yesMessages = [
    'Hihi je savais que tu dirais oui 🥹',
    'Homme heureux 🥰',
    'Mon cœur bat fort rien qu’en y pensant💓',
    'Tu as rendue ma journée parfaite :)',
    'Avec toi, tout devient magique ✨',
    'J’ai des papillons dans le ventre 🦋',
    'Tu illumines ma vie 🌙',
    /*'Je veux sentir ton chaleur sur mon corps, y déposer mes lèvres sur chacune de tes courbures 💋',*/
    'Mon amour, tu me fais tourner la tête 💓',
    'Je suis à tout à toi ❤️',
  ];

  const lastNoMessage = "J'ai maaal 😭";

  function gifAfterQuestion() {
    return (
      <div>
        <Gif />
      </div>
    );
  }

  function renderNoButton() {
    if (noQuoteIndex < noMessages.length) {
      return (
        <button onClick={() => setNoQuoteIndex(noQuoteIndex + 1)} className="btn btn-neutral">
          {noMessages[noQuoteIndex]}
        </button>
      );
    } else {
      return <RunawayNoButton message={lastNoMessage} />;
    }
  }
  function formAfterQuestion() {
    return (
      <div className={'flex flex-row justify-center items-center gap-2'}>
        <Tooltip messages={yesMessages}>
          <button className="btn btn-neutral" onClick={() => onYesClickHandler(true)}>
            Ouiii 💖
          </button>
        </Tooltip>
        {renderNoButton()}
      </div>
    );
  }

  return (
    <Background>
      <div className={'flex flex-col justify-center items-center gap-17'}>
        {questionFinish && gifAfterQuestion()}
        <Question onFinish={setQuestionFinish} />
        {questionFinish && formAfterQuestion()}
      </div>
    </Background>
  );
}
