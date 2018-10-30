import { TemplateBuilderModule } from './template-builder.module';

describe('TemplateBuilderModule', () => {
  let templateBuilderModule: TemplateBuilderModule;

  beforeEach(() => {
    templateBuilderModule = new TemplateBuilderModule();
  });

  it('should create an instance', () => {
    expect(templateBuilderModule).toBeTruthy();
  });
});
