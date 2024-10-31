import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAGE_NEWBIE_GUIDE_BUFFS, WARRIOR_NEWBIE_GUIDE_BUFFS } from './buff/newbie-guide-buffts';
import { PP } from './buff/prophet';
import { SE } from './buff/dark_elf';
import { EE } from './buff/elf';
import { OL, WC } from './buff/orc';

@Component({
  selector: 'app-buffs',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './buffs.component.html',
  styleUrl: './buffs.component.scss'
})
export class BuffsComponent {

  levelsToIterateNewbie = Array.from({length: 17}, (_, i) => i + 8)

  levelsToIterateBuffers = Array.from({length: 78}, (_, i) => i + 1)

  WARRIOR_NG = WARRIOR_NEWBIE_GUIDE_BUFFS
  MAGE_NG = MAGE_NEWBIE_GUIDE_BUFFS

  PP_BUFFS = PP
  SE_BUFFS = SE
  EE_BUFFS = EE
  OL_BUFFS = OL
  WC_BUFFS = WC
}
