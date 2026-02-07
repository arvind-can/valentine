import { TypeAnimation } from 'react-type-animation';

export default function Question({ onFinish }) {
  return (
    <TypeAnimation
      className="send-flowers text-5xl"
      sequence={[
        'J’ai une question trrrèèèèèèès importante à te poser... 💭',
        /*        500,
        'Mon médecin',
        500,
        'Mon ange',
        500,
        'Mon étoile',
        500,
        'Mon chou à la crème',
        500,
        'Mon coeur, voudrais-tu bien être\nma Valentine ?',
        1000,*/
        () => onFinish(true),
      ]}
      speed={50}
      repeat={0}
    />
  );
}
