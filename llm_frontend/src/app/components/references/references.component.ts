import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  /**
   * PUBLIC_INTERFACE
   * The static list of references. Adjust as needed.
   */
  references = [
    {
      title: 'OpenAI Platform Docs',
      url: 'https://platform.openai.com/docs/',
      desc: 'Comprehensive documentation for OpenAI LLMs and API.'
    },
    {
      title: 'Hugging Face Model Hub',
      url: 'https://huggingface.co/models',
      desc: 'Catalog of open-source and hosted LLMs from Hugging Face.'
    },
    {
      title: 'Google AI Model Garden',
      url: 'https://ai.google/discover/model-garden/',
      desc: 'Google research models and LLM portfolio.'
    },
    {
      title: 'Anthropic Claude Documentation',
      url: 'https://docs.anthropic.com/claude',
      desc: 'Anthropic Claude model and API info.'
    },
    {
      title: 'ChatGPT Product Page',
      url: 'https://chat.openai.com/',
      desc: 'ChatGPT for web and API users.'
    }
  ];
}
