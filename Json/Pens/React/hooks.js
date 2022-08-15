
const hooks = [
    {
        title: 'localStorage - React-hook',
        subtitle: '',
        text: 'Custom React Hooks. Храним наши данные в localStorage, sessionStorage или там где душе угодно.',
        code: `
export interface Params<V, K> {
    key: K;
    initialValue?: Maybe<V>;
    storage: Storage<K, V>;
}

export const useStorage = <V, K = any>({
    key,
    storage,
    initialValue = null,
}: Params<V, K>): [Maybe<V>, (data: V) => void, () => void] => {
    const [localValue, setLocalValue] = useState<Maybe<V>>(initialValue);

    const handleSetValue = useCallback(
        (data: V) => {
            storage.setItem(key, data);
            storageEventObserver.dispatch({
                storage,
                key,
                value: data,
            });
        },
        [key, storage]
    );

    const handleRemoveValue = useCallback(() => {
        storage.removeItem(key);
        storageEventObserver.dispatch({
            storage,
            key,
            value: null,
        });
    }, [storage, key]);

    useEffect(() => {
        const storedValue = storage.getItem(key);
        const actualValue = storedValue ?? initialValue;

        setLocalValue(actualValue);

        if (actualValue !== null && storedValue !== actualValue) {
            handleSetValue(actualValue);
        }
    }, [key, initialValue, storage, handleSetValue]);

    useEffect(() => {
        const handleStorageValueChange = (event: StorageEvent) => {
            if (!isActualEvent<V, K>(event, storage, key)) {
                return;
            }

            setLocalValue(event.value);
        };

        storageEventObserver.subscribe(handleStorageValueChange);

        return () => {
            storageEventObserver.unsubscribe(handleStorageValueChange);
        };
    }, [storage, key]);

    return [localValue, handleSetValue, handleRemoveValue];
};
`,
        usage: `
        import { Storage as BaseStorage } from '../types/storage';

export class WebStorageAdapter implements BaseStorage<string> {
    storage: Storage | null;

    constructor(storage: Storage | null) {
        this.storage = storage;
    }

    getItem<V>(key: string): Maybe<V> {
        const value = this.storage?.getItem(key);

        if (value === null || typeof value === 'undefined') {
            return null;
        }

        return JSON.parse(value);
    }

    setItem<V>(key: string, value: V) {
        this.storage?.setItem(key, JSON.stringify(value));
    }

    removeItem(key: string) {
        this.storage?.removeItem(key);
    }
}
        `

    },
]
