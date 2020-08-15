import { TodoFormComponent } from "./todo-form.component";
import { FormBuilder } from "@angular/forms";

describe("TodoFormComponent", () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it("should have two feilds name and email", () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it("should make name feild required", () => {
    let controls= component.form.controls['name'];
    controls.setValue('');
    expect(controls.valid).toBeFalsy();

  });
});
