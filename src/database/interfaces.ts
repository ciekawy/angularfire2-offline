import { ReplaySubject, Observable } from 'rxjs';

/**
 * Each cacheItem is related to a Firebase reference.
 * - If loaded through the network, loaded is set to true
 * - sub is the `Observable` that the is made available to the rest of the app
 */
export interface AngularFireOfflineCache {
  [cacheItem: string]: {
    offlineInit: boolean;
    loaded: boolean;
    sub: any;
  };
}

export interface WriteCache {
  lastId: number;
  cache: {
    [id: number]: CacheItem;
  };
}

export interface CacheItem {
  type: string;
  ref: string;
  method: string;
  args: Array<any>;
}
