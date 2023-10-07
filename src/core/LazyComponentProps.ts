export interface LazyComponentProps<T> {
  route: {params: T};
  navigation?: any;
}
