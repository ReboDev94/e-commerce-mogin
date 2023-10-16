export const useCarousel = <T>() => {
  const indexSelected = ref(0);
  const items = ref([]) as Ref<T[]>;

  const setItems = (data: T[]) => {
    items.value = data;
    if (items.value.length > 0) indexSelected.value = 0;
  };
  const itemSelected = computed<T | null>(() => items.value[indexSelected.value] || null);

  const hasPrevious = computed(() => items.value.length > 0 && indexSelected.value > 0);
  const hasNext = computed(() => items.value.length > 0 && indexSelected.value < items.value.length - 1);

  const previousItem = () => {
    hasPrevious.value && indexSelected.value--;
  };
  const nextItem = () => {
    hasNext.value && indexSelected.value++;
  };

  return {
    allItems: readonly(items),
    itemSelected: readonly(itemSelected),
    hasPrevious: readonly(hasPrevious),
    hasNext: readonly(hasNext),
    setItems,
    previousItem,
    nextItem,
  };
};
