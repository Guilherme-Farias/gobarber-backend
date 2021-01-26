import { container } from 'tsyringe';

import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<FakeHashProvider>(
  'HashProvider',
  BCryptHashProvider,
);
