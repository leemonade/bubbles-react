import * as SelectRadix from '@radix-ui/react-select';

export const Select = () => (
  <SelectRadix.Root>
    <SelectRadix.Trigger>
      <SelectRadix.Value placeholder="Pick an option" />
      <SelectRadix.Icon />
    </SelectRadix.Trigger>

    <SelectRadix.Portal>
      <SelectRadix.Content>
        <SelectRadix.ScrollUpButton />
        <SelectRadix.Viewport>
          <SelectRadix.Item value="united-kingdom">
            <SelectRadix.ItemText>United Kingdom</SelectRadix.ItemText>
            <SelectRadix.ItemIndicator />
          </SelectRadix.Item>

          <SelectRadix.Group>
            <SelectRadix.Item value="united-kingdom 2">
              <SelectRadix.ItemText>United Kingdom 2</SelectRadix.ItemText>
              <SelectRadix.ItemIndicator />
            </SelectRadix.Item>
          </SelectRadix.Group>

          <SelectRadix.Separator />
        </SelectRadix.Viewport>
        <SelectRadix.ScrollDownButton />
        <SelectRadix.Arrow />
      </SelectRadix.Content>
    </SelectRadix.Portal>
  </SelectRadix.Root>
);
