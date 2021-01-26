import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/model/IStorageProvider';
import DisKStorageProvider from '@shared/container/providers/StorageProvider/implementations/DisKStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DisKStorageProvider,
);
