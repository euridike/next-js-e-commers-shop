/* import { useRouter } from 'next/router'; */

import Image from 'next/image';
import { animalsDatabase } from '../../util/database';

export default function Animal(props) {
  /* const router = useRouter();
  const { animalId } = router.query; */
  if (!props.animal) {
    return <div>Animal is not found</div>;
  }
  return (
    <div>
      <h1>{props.animal.name}</h1>
      <div>
        <div>
          <div>
            {' '}
            <Image src={`/${props.animal.id}.jpeg`} width="400" height="300" />
          </div>
          <div>id: {props.animal.id}</div>
          <div>accessory: {props.animal.accessory}</div>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const foundAnimal = animalsDatabase.find((animal) => {
    return animal.id === context.query.animalId;
  });

  return {
    props: {
      /* animalId: context.query.animalId, */
      animal: foundAnimal || null,
    },
  };
}
