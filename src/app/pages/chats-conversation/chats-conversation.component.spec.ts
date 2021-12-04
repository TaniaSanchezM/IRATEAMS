import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsConversationComponent } from './chats-conversation.component';

describe('ChatsConversationComponent', () => {
  let component: ChatsConversationComponent;
  let fixture: ComponentFixture<ChatsConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
