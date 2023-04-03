import { AvatarComponent } from './avatar.component';
import { applicationConfig, Meta } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { AvatarModule } from './avatar.module';

export default {
  component: AvatarComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(AvatarModule)],
    }),
  ],
} as Meta;

export const Avatar = {}
