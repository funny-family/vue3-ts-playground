import type { TestPageBindings } from './test-page.setup';
import { defineComponent } from 'vue';
import { setup } from './test-page.setup';
import { render } from './test-page.render';
import { directives } from './test-page.directives';
import { nameOf } from '@/app/shared/utils/name-of';

type Props = {};
type RawBindings = TestPageBindings;

export const TestPage = defineComponent<Props, RawBindings>({});

// @ts-expect-error
TestPage.name = nameOf(() => TestPage);
TestPage.inheritAttrs = false;
TestPage.render = render;
TestPage.setup = setup;
TestPage.directives = directives;

export default TestPage;
