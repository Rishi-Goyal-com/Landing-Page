import type { ComponentType } from 'react'
import { Database } from 'lucide-react'
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiGradio,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPandas,
  SiPython,
  SiScikitlearn,
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa'
import { TbBrandAzure } from 'react-icons/tb'

export interface SkillCategory {
  title: string
  skills: { name: string; icon: ComponentType<{ className?: string }> }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Node.js', icon: SiNodedotjs },
    ],
  },
  {
    title: 'Backend, Containers & Cloud',
    skills: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: TbBrandAzure },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    title: 'Tools & Machine Learning',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Gradio', icon: SiGradio },
    ],
  },
]
