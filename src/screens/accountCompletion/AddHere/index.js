import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {BackScreen} from '../../../assets/svgs';
import {SimpleButton, SkillButton} from '../../../components/buttons';
import {styles} from './style';
const AddHere = ({navigation}) => {
  const [skill, setSkill] = useState([]);
  const [category, setCategory] = useState([]);
  const [goal, setGoal] = useState([]);

  const addSkill = item => {
    if (skill.length < 3) {
      setSkill([...skill, {name: item}]);
    }
  };

  const addCategory = item => {
    if (category.length < 3) {
      setCategory([...category, {name: item}]);
    }
  };
  const addGoal = item => {
    if (goal.length < 3) {
      setGoal([...goal, {name: item}]);
    }
  };
  const allSkill = [['skill', 'skill', 'skill'], ['skill', 'skill'], ['skill']];
  const allGoal = [['Goal', 'Goal', 'Goal'], ['Goal', 'Goal'], ['Goal']];
  const allCategory = [
    ['Category', 'Category', 'Category'],
    ['Category', 'Category'],
    ['Category'],
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('PartnerGender')}>
        <BackScreen style={styles.backmove} />
      </TouchableOpacity>
      <Text style={styles.gendertxt}>Add here</Text>
      <Text style={styles.choosetxt}>
        Select workout categories, skills and goals
      </Text>
      <View style={styles.slectedView}>
        <ScrollView>
          <View>
            <Text style={styles.selectedTxt}>
              Selcted skills : {skill.length} of 3{' '}
            </Text>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={skill}
              horizontal
              style={styles.skillflatlist}
              renderItem={({item}) => (
                <View style={styles.skillviewbtn}>
                  <SkillButton title={item.name} />
                </View>
              )}
              ListEmptyComponent={() => (
                <View style={styles.notselected}>
                  <Text style={styles.notselecttxt}>
                    You have not selected any Skill
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index + ''}
            />
          </View>
          <View style={styles.categoryview}>
            <Text style={styles.selectedTxt}>
              Selected Categories : {category.length} of 3
            </Text>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={category}
              horizontal
              renderItem={({item}) => (
                <View style={styles.skillviewbtn}>
                  <SkillButton title={item.name} />
                </View>
              )}
              ListEmptyComponent={() => (
                <View style={styles.notselected}>
                  <Text style={styles.notselecttxt}>
                    You have not selected any category
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index + ''}
            />
          </View>
          <View style={styles.goalview}>
            <Text style={styles.selectedTxt}>
              Selected Goals : {goal.length} of 3
            </Text>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={goal}
              horizontal
              renderItem={({item}) => (
                <View style={styles.skillviewbtn}>
                  <SkillButton title={item.name} />
                </View>
              )}
              ListEmptyComponent={() => (
                <View style={styles.notselected}>
                  <Text style={styles.notselecttxt}>
                    You have not selected any goal
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index + ''}
            />
          </View>

          <Text style={styles.skilltxt}>Skills</Text>
          <View style={styles.skillMainView}>
            {allSkill.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                  }}>
                  {item.map(e => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingHorizontal: 5,
                        }}>
                        <SkillButton
                          onPress={() => addSkill(e)}
                          title="Skill"
                          style={styles.skillbtn}
                        />
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
          <Text style={styles.skilltxt}>Categories</Text>
          <View style={styles.skillMainView}>
            {allCategory.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                  }}>
                  {item.map(e => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingHorizontal: 5,
                        }}>
                        <SkillButton
                          onPress={() => addCategory(e)}
                          title="Category"
                          style={styles.skillbtn}
                        />
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
          <Text style={styles.skilltxt}>Categories</Text>
          <View style={styles.skillMainView}>
            {allGoal.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                  }}>
                  {item.map(e => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingHorizontal: 5,
                        }}>
                        <SkillButton
                          onPress={() => addGoal(e)}
                          title="Goal"
                          style={styles.skillbtn}
                        />
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <SimpleButton
        onPress={() => navigation.navigate('StartedWithSwollmate')}
        style={styles.continueBtn}
        title="Continue"
      />
    </View>
  );
};
export default AddHere;
