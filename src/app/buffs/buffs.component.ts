import { Component } from '@angular/core';
import { MAGE_NEWBIE_GUIDE_BUFFS, WARRIOR_NEWBIE_GUIDE_BUFFS } from './buff/newbie-guide-buffts';

@Component({
  selector: 'app-buffs',
  standalone: true,
  imports: [],
  templateUrl: './buffs.component.html',
  styleUrl: './buffs.component.scss'
})
export class BuffsComponent {

  levelsToIterate = Array.from({length: 18}, (_, i) => i + 7)

  WARRIOR_NG = WARRIOR_NEWBIE_GUIDE_BUFFS
  MAGE_NG = MAGE_NEWBIE_GUIDE_BUFFS
}
